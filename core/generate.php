<?php

$knowns = explode(',', $_POST['knowns']);
$unknowns = explode(',', $_POST['unknowns']);

$IR = new IR($knowns, $unknowns);

$presentation = $IR->createPresentation();
