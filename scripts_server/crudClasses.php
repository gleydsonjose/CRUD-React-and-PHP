<?php
class Connection {
  protected $pdo;
  private $dbname;
  private $host;
  private $user;
  private $password;

  public function __construct($dbname, $host, $user, $password) {
    $this->dbname = $dbname;
    $this->host = $host;
    $this->user = $user;
    $this->password = $password;
  }

  public function MySQLCon() {
    try {
      $this->pdo = new PDO("mysql:dbname=".$this->dbname.";charset=utf8;host=".$this->host, $this->user, $this->password);
    } catch (PDOException $exception) {
      echo "Error Connection PDO ".$exception->getMessage();
    } catch (Exception $exception) {
      echo "Error Connection ".$exception->getMessage();
    }
  }
}

class SelectData extends Connection {
  protected $showProducts;

  public function __construct($dbname, $host, $user, $password) {
    parent::__construct($dbname, $host, $user, $password);
  }

  public function showProductsForLimit($limit, $offset) {
    $showProducts = $this->pdo->prepare("SELECT * FROM products LIMIT :l OFFSET :of");
    $showProducts->bindValue(':l', $limit, PDO::PARAM_INT);
    $showProducts->bindValue(':of', $offset, PDO::PARAM_INT);
    $showProducts->execute();
    return $showProducts->fetchAll(PDO::FETCH_ASSOC);
  }

  public function showProductData($idProduct) {
    $showProductData = $this->pdo->prepare("SELECT * FROM products WHERE id = :id");
    $showProductData->bindValue(':id', $idProduct, PDO::PARAM_INT);
    $showProductData->execute();
    return $showProductData->fetch();
  }
}

class InsertData extends Connection {
  public function __construct($dbname, $host, $user, $password) {
    parent::__construct($dbname, $host, $user, $password);
  }

  public function insertNewProduct($name, $manufacturer, $price, $quantity) {
    $insertProduct = $this->pdo->prepare("INSERT INTO products (name, manufacturer, price, quantity) VALUES (:n, :m, :p, :q)");
    $insertProduct->bindValue(':n', $name, PDO::PARAM_STR);
    $insertProduct->bindValue(':m', $manufacturer, PDO::PARAM_STR);
    $insertProduct->bindValue(':p', $price, PDO::PARAM_INT);
    $insertProduct->bindValue(':q', $quantity, PDO::PARAM_INT);
    $insertProduct->execute();
  }
}

class DeleteData extends Connection {
  public function __construct($dbname, $host, $user, $password) {
    parent::__construct($dbname, $host, $user, $password);
  }

  public function deleteProductId($idProduct) {
    $deleteProduct = $this->pdo->prepare("DELETE FROM products WHERE id = :id");
    $deleteProduct->bindValue(":id", $idProduct, PDO::PARAM_INT);
    $deleteProduct->execute();
  }
}

class UpdateData extends Connection {
  public function __construct($dbname, $host, $user, $password) {
    parent::__construct($dbname, $host, $user, $password);
  }

  public function updateProductData($idProduct, $name, $manufacturer, $price, $quantity) {
    $updateProductData = $this->pdo->prepare("UPDATE products SET name = :n, manufacturer = :m, price = :p, quantity = :q WHERE id = :id");
    $updateProductData->bindValue(":id", $idProduct, PDO::PARAM_INT);
    $updateProductData->bindValue(':n', $name, PDO::PARAM_STR);
    $updateProductData->bindValue(':m', $manufacturer, PDO::PARAM_STR);
    $updateProductData->bindValue(':p', $price, PDO::PARAM_INT);
    $updateProductData->bindValue(':q', $quantity, PDO::PARAM_INT);
    $updateProductData->execute();
  }
}