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
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['title'], $data['season'], $data['episode'])) {
    $title = trim($data['title']);
    $season = intval($data['season']);
    $episode = intval($data['episode']);
    $is_active = isset($data['is_active']) ? intval($data['is_active']) : 1; // Alapértelmezett érték
    $created_at = date('Y-m-d H:i:s');
    $updated_at = $created_at;

    if (empty($title) || $season <= 0 || $episode <= 0) {
        echo json_encode(["success" => false, "error" => "Invalid input data"]);
        exit;
    }

    try {
        $sql = "INSERT INTO szer_movies (title, season, episode, is_active, created_at, updated_at) 
                VALUES (:title, :season, :episode, :is_active, :created_at, :updated_at)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':title' => $title,
            ':season' => $season,
            ':episode' => $episode,
            ':is_active' => $is_active,
            ':created_at' => $created_at,
            ':updated_at' => $updated_at,
        ]);

        echo json_encode(["success" => true, "message" => "Record added successfully"]);
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
}
