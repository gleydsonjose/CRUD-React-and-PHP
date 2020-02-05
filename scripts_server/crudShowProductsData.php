<?php
require_once('crudClasses.php');

$limitListDataCurrent = isset($_POST['limitListDataCurrent']) ? intval(strip_tags(trim($_POST['limitListDataCurrent']))) : "";
$listCurrentFirstData = isset($_POST['listCurrentFirstData']) ? intval(strip_tags(trim($_POST['listCurrentFirstData']))) : "";

if($limitListDataCurrent >= 0 && $listCurrentFirstData >= 0 ):
  $showProductsData = new SelectData('dbname', 'host', 'user', 'password');
  $showProductsData->MySQLCon();
  echo json_encode($showProductsData->showProductsForLimit($limitListDataCurrent, $listCurrentFirstData));
endif;