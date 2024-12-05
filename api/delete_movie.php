<?php
// Adatbázis kapcsolódási adatok
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

header('Content-Type: application/json');

// Csak DELETE metódust fogad el
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    echo json_encode(["success" => false, "error" => "Invalid request method. Use DELETE."]);
    exit;
}

// JSON bemenet feldolgozása
$data = json_decode(file_get_contents('php://input'), true);

// Ellenőrzi, hogy az 'id' mező jelen van-e
if (!isset($data['id']) || !is_numeric($data['id'])) {
    echo json_encode(["success" => false, "error" => "Missing or invalid 'id' field."]);
    exit;
}

$id = intval($data['id']);

try {
    // SQL törlés
    $sql = "DELETE FROM szer_movies WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $id]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => true, "message" => "Record deleted successfully."]);
    } else {
        echo json_encode(["success" => false, "error" => "No record found with the provided ID."]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
}
