<?php
// Adatbázis kapcsolódási adatok
define('DB_HOST', 'localhost');
define('DB_USER', 'lali_user');
define('DB_PASSWORD', 'CvLEP4O2tn0z3Dub5pzygM5q9p2O5TX0');
define('DB_NAME', 'lali');
define('DB_PORT', 3306);

// Adatbázis kapcsolat létrehozása PDO-val
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

// Dátumok lekérdezése az adatbázisból
try {
    $stmt = $pdo->query("SELECT id, dates_date, dates_title, dates_city, is_active FROM szer_dates ORDER BY dates_date ASC");
    $dates = $stmt->fetchAll();

    // Válasz JSON formátumban
    header('Content-Type: application/json');
    echo json_encode($dates);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Database query failed: " . $e->getMessage()]);
}
