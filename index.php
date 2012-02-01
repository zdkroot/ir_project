<?php
require_once('core/IR.php');

$knowns = array( "p", "h", "t", "m", "f", "s" );
$unknowns = array("c", "o", "z", "q", "w");

$IR = new IR($knowns, $unknowns);

$presentation = $IR->createPresentation();
echo '<pre>' . print_r($presentation) . '</pre>';
?>
