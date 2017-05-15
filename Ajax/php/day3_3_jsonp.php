<?php
	$callback=$_GET['que'];
	$arr = array("zs","ls","ww");
	echo $callback."(".json_encode($arr).")";
?>