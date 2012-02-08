<?php
function loop(&$arr) {
    echo '<ul>';
    foreach ($arr as $var) {
        echo '<li class="drag" draggable="true"><a href="#">'. $var .'</a></li>' . "\r\n";
     }
    echo '</ul>';
}
