<?php
    require_once('core/IR.php');
    require_once('core/functions.php');
    error_reporting(E_ALL);
    ini_set('display_errors','On');
    $unknowns = array( "p", "h", "t", "m", "f", "s" );
    $knowns = array("c", "o");

?>
<!doctype html>
<head language="en">
<meta charset="utf-8">
<title>LxRehearse</title>
<link rel="stylesheet" href="public/style.css">
<head>
<body>

<div class="thingies">
<?php loop($knowns);?>
</div>


<div class="thingies">
<?php loop($unknowns);?>
</div>

<script src="public/scripts.js"></script>
</body>
</html>
