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
?>
<!doctype html>
<head>
<title>LxRehease</title>
<link rel="stylesheet" href="../public/style.css">
<head>
<body>

<div class="thingies">
<ul>
<?php foreach ($knowns as $var): ?>
    <li><a href="#"><?php echo $var ?></a></li>
<?php endforeach; ?>
</ul>
</div>


<div class="thingies">
<ul>
<?php foreach ($unknowns as $var): ?>
    <li><a href="#"><?php echo $var ?></a></li>
<?php endforeach; ?>
</ul>
</div>

</body>
</html>
