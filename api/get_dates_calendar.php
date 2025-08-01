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

$sql = "SELECT id, dates_date, dates_title, dates_city FROM szer_dates WHERE is_active = 1";
$stmt = $pdo->query($sql);

$events = [];
while ($row = $stmt->fetch()) {
    $events[] = [
        'id' => $row['id'],
        'title' => $row['dates_title'],
        'start' => $row['dates_date'],  
        'location' => $row['dates_city'], 
    ];
}
echo json_encode($events);
?>
