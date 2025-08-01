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
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['dates_date'], $data['dates_title'], $data['dates_city'], $data['is_active'])) {
    $dates_date = trim($data['dates_date']);
    $dates_title = trim($data['dates_title']);
    $dates_city = trim($data['dates_city']);
    $is_active = intval($data['is_active']);
    $created_at = date('Y-m-d H:i:s');
    $updated_at = $created_at;

    if (empty($dates_date) || empty($dates_title) || empty($dates_city)) {
        echo json_encode(["success" => false, "error" => "Invalid input data"]);
        exit;
    }

    try {
        $sql = "INSERT INTO szer_dates (dates_date, dates_title, dates_city, is_active, created_at, updated_at) 
                VALUES (:dates_date, :dates_title, :dates_city, :is_active, :created_at, :updated_at)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':dates_date' => $dates_date,
            ':dates_title' => $dates_title,
            ':dates_city' => $dates_city,
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
