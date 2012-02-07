<?php
header("Content-Type: text/plain");
set_time_limit(0);

$infoString = "Hello World" . "\n";
while(1)
{
        echo $infoString;
        flush();
        ob_flush();
        sleep(5);
}
?>