<?php
require_once('crudShowData.php');

$modalCurrent = isset($_POST['modalCurrent']) ? strip_tags(trim($_POST['modalCurrent'])) : "";
$addModalInputName = isset($_POST['addModalInputName']) ? strip_tags(trim($_POST['addModalInputName'])) : "";
$addModalInputManufacturer = isset($_POST['addModalInputManufacturer']) ? strip_tags(trim($_POST['addModalInputManufacturer'])) : "";
$addModalInputPrice = isset($_POST['addModalInputPrice']) ? strip_tags(trim($_POST['addModalInputPrice'])) : "";
$addModalInputQuantity = isset($_POST['addModalInputQuantity']) ? strip_tags(trim($_POST['addModalInputQuantity'])) : "";
$deleteModalSelect = isset($_POST['deleteModalSelect']) ? strip_tags(trim($_POST['deleteModalSelect'])) : "";
$updateModalSelect = isset($_POST['updateModalSelect']) ? strip_tags(trim($_POST['updateModalSelect'])) : "";
$updateModalInputName = isset($_POST['updateModalInputName']) ? strip_tags(trim($_POST['updateModalInputName'])) : "";
$updateModalInputManufacturer = isset($_POST['updateModalInputManufacturer']) ? strip_tags(trim($_POST['updateModalInputManufacturer'])) : "";
$updateModalInputPrice = isset($_POST['updateModalInputPrice']) ? strip_tags(trim($_POST['updateModalInputPrice'])) : "";
$updateModalInputQuantity = isset($_POST['updateModalInputQuantity']) ? strip_tags(trim($_POST['updateModalInputQuantity'])) : "";

switch($modalCurrent):
  case "addModal":
    $insertnNewProduct = new InsertData("dbname", "host", "user", "password");
    $insertnNewProduct->MySQLCon();
    $insertnNewProduct->insertNewProduct($addModalInputName, $addModalInputManufacturer, $addModalInputPrice, $addModalInputQuantity);
    break;
  case "deleteModal":
    $deleteProductId = new DeleteData("dbname", "host", "user", "password");
    $deleteProductId->MySQLCon();
    $deleteProductId->deleteProductId($deleteModalSelect);
    break;
  case "updateModal":
    $updateProductData = new UpdateData("dbname", "host", "user", "password");
    $updateProductData->MySQLCon();
    $updateProductData->updateProductData($updateModalSelect, $updateModalInputName, $updateModalInputManufacturer, $updateModalInputPrice, $updateModalInputQuantity);
    break;
endswitch;