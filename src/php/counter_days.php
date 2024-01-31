<?php 
function returnDays(){
	$today = date('Y/m/d');
	$year = date('Y');
	$birthday = ($year."-10-01");

	$calc = strtotime($today) - strtotime($birthday);
	$days = floor(($calc / (60 * 60 * 24))*-1)+1;

	return $days;
}


?>