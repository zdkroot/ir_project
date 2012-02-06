<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

require_once('IR.php');
$knowns = explode(',', $_POST['knowns']);
$unknowns = explode(',', $_POST['unknowns']);

//$knowns = array( "p", "h", "t", "m", "f", "s" );
//$unknowns = array("c", "o", "z", "q", "w";

$IR = new IR($knowns, $unknowns);

$presentation = $IR->createPresentation();
function loop($arr) {
    echo '<ul>';
    foreach ($arr as $var) {
        echo '<li><a href="#">'. $var .'</a></li>';
     }
    echo '</ul>';
}

?>
<!doctype html>
<head>
<title>LxRehearse</title>
<link rel="stylesheet" href="../public/style.css">
<head>
<body>

<div class="thingies">
<?php loop($knowns);?>
</div>


<div class="thingies">
<?php loop($unknowns);?>
</div>

</body>
</html>
