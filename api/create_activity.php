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

// Adat fogadása JSON formátumban
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

// Ellenőrzés: kötelező mezők megléte
if (isset($data['activity'])) {
    $activity = trim($data['activity']);
    $created_at = date('Y-m-d H:i:s');

    // Üres vagy érvénytelen bemenet ellenőrzése
    if (empty($activity)) {
        echo json_encode(["success" => false, "error" => "Invalid input: name is required"]);
        exit;
    }

    try {
        // SQL előkészített utasítás
        $sql = "INSERT INTO szer_activites (activity, created_at) VALUES (:activity, :created_at)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':activity' => $activity,
            ':created_at' => $created_at,
        ]);

        echo json_encode(["success" => true, "message" => "Activity added successfully"]);
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
}
