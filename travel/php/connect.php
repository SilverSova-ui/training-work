<?php
if (isset($_POST['name']) && isset($_POST['addres']) && isset($_POST['email']) && isset($_POST['message'])){ //обновление при внесение данных

$name = $_POST['name']; //данные с инпутов
$addres = $_POST['addres'];
$email = $_POST['email'];
$message = $_POST['message'];

$db_host = "localhost"; //подключение к бд
$db_user = "root";
$db_password = "";
$db_base = "questionnaire"; 

$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

if ($mysqli->connect_error) {
    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$query = "INSERT INTO questions VALUES (NULL,'$name','$addres','$email','$message')";
$mysqli->query($query);

if ($query == true){
	echo "Информация занесена в базу данных";
}else{
	echo "Информация не занесена в базу данных";
}

}
?>
<head>
	<title>connect</title>
	<style type="text/css">
	ul{
		display:flex;
		flex-wrap: wrap;
	}
	li {
	    width: 15em;
	    height: auto;
	    border: 1px solid black;
	    list-style: none;
	    margin-left: 1em;
	    margin-right: 0.2em;
	    margin-top: 1em;
	}
	p{
		margin-left:1em;
	}
	</style>
</head>
<body>
<ul>
<?php
$db_host = "localhost"; //подключение к бд
$db_user = "root";
$db_password = "";
$db_base = "questionnaire"; 

$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

$sql = mysqli_query($mysqli, 'SELECT `id`, `name`,`addres`, `email/phone`, `message` FROM `questions`');
 while ($result = mysqli_fetch_array($sql)) {
    echo "<li><p>id:{$result['id']}</p><p>name:{$result['name']}</p><p>addres:{$result['addres']}</p><p>email:{$result['email/phone']}</p><p>message:{$result['message']}</p></li>";
  }
?>
</ul>
</body>