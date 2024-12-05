<?php
// Adatbázis kapcsolódási adatok
define('DB_HOST', 'pti.unithe.hu');
define('DB_USER', 'lali_user');
define('DB_PASSWORD', 'CvLEP4O2tn0z3Dub5pzygM5q9p2O5TX0');
define('DB_NAME', 'lali');
define('DB_PORT', 13306);

// Csatlakozás az adatbázishoz
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);

// Ellenőrzés, hogy sikerült-e a kapcsolat
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Tábla neve (változtasd meg az aktuális tábla nevére)
$table = 'szer_movies';

// SQL lekérdezés
$sql = "SELECT * FROM $table";
$result = $conn->query($sql);

// Ellenőrizzük, hogy van-e eredmény
if ($result->num_rows > 0) {
    $records = [];
    while ($row = $result->fetch_assoc()) {
        $records[] = $row;
    }
    // Eredmény kiírása JSON formátumban
    header('Content-Type: application/json');
    echo json_encode($records, JSON_PRETTY_PRINT);
} else {
    echo json_encode(["message" => "No records found."]);
}

// Kapcsolat bezárása
$conn->close();
?>
