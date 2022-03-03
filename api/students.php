<?php
$host = 'db';
$db_name = 'institute';
$db_user = 'root';
$db_pas= '123';

try {
	$db = new PDO('mysql:host='.$host.';dbname='.$db_name, $db_user, $db_pas);
} catch (PDOException $e) {
	print "Error!: "  . $e->getMessage();
	die();
}

$result = '{"students":[';
$stmt = $db->query("SELECT s.ID,s.SURNAME, `s`.`NAME`,s.LOGO,g.TITLE AS GR FROM `students` AS s JOIN `groups` AS g on s.ID_GROUP=g.ID;");
while ($row = $stmt->fetch()) {
	$result .=sprintf('{"id":%d,"surname":"%s","name":"%s","group":"%s","LOGO":"%s"},',$row['ID'],$row['SURNAME'],$row['NAME'],$row['GR'],$row['LOGO']);
}
$result = rtrim($result, ",");
$result .= ']}';

echo $result;
?>
