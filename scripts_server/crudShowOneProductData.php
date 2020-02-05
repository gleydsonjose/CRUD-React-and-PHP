<?php
require_once('crudClasses.php');

$updateModalSelect = isset($_POST['updateModalSelect']) ? intval(strip_tags(trim($_POST['updateModalSelect']))) : "";

if($updateModalSelect >= 0):
  $showOneProductData = new SelectData('dbname', 'host', 'user', 'password');
  $showOneProductData->MySQLCon();
  echo json_encode($showOneProductData->showProductData($updateModalSelect));
endif;