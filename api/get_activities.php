<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'lali_user');
define('DB_PASSWORD', 'CvLEP4O2tn0z3Dub5pzygM5q9p2O5TX0');
define('DB_NAME', 'lali');
define('DB_PORT', 3306);

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";port=" . DB_PORT . ";charset=utf8mb4";
    $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

try {
    $sql = "SELECT * FROM szer_activites ORDER BY created_at DESC";
    $stmt = $pdo->query($sql);
    $activities = $stmt->fetchAll();

    echo json_encode(["success" => true, "data" => $activities]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Database query failed: " . $e->getMessage()]);
    exit;
}
