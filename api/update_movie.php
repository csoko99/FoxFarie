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

header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    echo json_encode(["success" => false, "error" => "Invalid request method. Use PUT."]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['id']) || !is_numeric($data['id'])) {
    echo json_encode(["success" => false, "error" => "Missing or invalid 'id' field."]);
    exit;
}

$id = intval($data['id']);
$updateFields = [];
$params = [':id' => $id];

if (!empty($data['title'])) {
    $updateFields[] = "title = :title";
    $params[':title'] = trim($data['title']);
}

if (isset($data['season']) && is_numeric($data['season'])) {
    $updateFields[] = "season = :season";
    $params[':season'] = intval($data['season']);
}

if (isset($data['episode']) && is_numeric($data['episode'])) {
    $updateFields[] = "episode = :episode";
    $params[':episode'] = intval($data['episode']);
}

if (isset($data['is_active'])) {
    $updateFields[] = "is_active = :is_active";
    $params[':is_active'] = intval($data['is_active']);
}

if (empty($updateFields)) {
    echo json_encode(["success" => false, "error" => "No fields to update."]);
    exit;
}

$updated_at = date('Y-m-d H:i:s');
$updateFields[] = "updated_at = :updated_at";
$params[':updated_at'] = $updated_at;

try {
    $sql = "UPDATE szer_movies SET " . implode(", ", $updateFields) . " WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => true, "message" => "Record updated successfully."]);
    } else {
        echo json_encode(["success" => false, "error" => "No record found with the provided ID or no changes made."]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
}
