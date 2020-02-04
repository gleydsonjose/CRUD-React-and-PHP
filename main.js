'use strict';

function TableHead(props) {
  return (
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Manufacturer</th>
    </tr>
  );
}

function TableData(props) {
  return (
    props.listProduct.map((product) =>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>US$ {product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.manufacturer}</td>
      </tr>
    )
  );
}

function Table(props) {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        <TableData listProduct={props.listProduct}/>
      </tbody>
    </table>
  );
}

function Button(props) {
  const btnType = props.type;
  const btnIcon = props.icon;
  const btnText = props.text;

  return (
    <button type={btnType ? btnType : "button"} className="btn btn-red" onClick={props.onClick}>
      {btnIcon}
      {btnText && btnText}
    </button>
  );
}

function MainLeftButtonsGroup(props) {
  return (
    <div id="registered-products-btngroup-left">
      <Button icon={<i className="fas fa-chevron-left"></i>} onClick={props.onClickBtnPrev} />
        <span id="page-count">{props.pageCurrent}</span>
      <Button icon={<i className="fas fa-chevron-right"></i>} onClick={props.onClickBtnNext} />
    </div>
  );
}

function MainRightButtonsGroup(props) {
  return (
    <div id="registered-products-btngroup-right">
      <Button icon={<i className="fas fa-plus-circle"></i>} text="Add" onClick={props.onClickAddModal} />
      <Button icon={<i className="fas fa-trash-alt"></i>} text="Delete" onClick={props.onClickDeleteModal} />
      <Button icon={<i className="fas fa-edit"></i>} text="Update" onClick={props.onClickUpdateModal} />
    </div>
  );
}

function Input(props) {
  const inputId = props.id;
  const inputPlaceholder = props.placeholder;
  const inputType = props.type;
  const labelText = props.labelText;

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input type={inputType} placeholder={inputPlaceholder} name={props.nameInput} value={props.inputOrSelectValue} onChange={props.onChangeInputOrSelect}/>
    </div>
  );
}

function SelectForm(props) {
  const selectId = props.id;

  return (
    <div className="input-group">
      <label htmlFor={selectId}>Choose a product</label>
      <select id={selectId} name={props.nameInput} value={props.inputOrSelectValue} onChange={props.onChangeInputOrSelect} >
        <option value="">None</option>
        {props.listProduct.map((product) => 
          <option key={product.id} value={product.id}>{product.name}</option>
        )}
      </select>
    </div>
  );
}

function ModalBody(props) {
  const modalTitle = props.title;
  const formInputChildren = props.children;
  const btnSubmitIcon = props.btnSubmitIcon;
  const btnSubmitText = props.btnSubmitText;

  return (
    <div id="product-modal-background" onClick={props.onClickCloseModalBackground}>
      <div id="product-modal-foreground">
        <h2>{modalTitle}</h2>

        <form>
          {formInputChildren}

          <div className="form-btngroup">
            <Button icon={<i className="fas fa-chevron-circle-left"></i>} text="Back" onClick={props.onClickCloseModal} />
            <Button type="submit" icon={btnSubmitIcon} text={btnSubmitText} onClick={props.onClickSubmitData} />
          </div>
        </form>
      </div>
    </div>
  );
}

class Modals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modalCurrent = this.props.modalCurrent;

    if(modalCurrent === "addModal") {
      return (
        <div id="modals-group">
          <ModalBody 
            title="Add Product"
            btnSubmitIcon={<i className="fas fa-plus-circle"></i>}
            btnSubmitText="Add"
            onClickCloseModal={this.props.onClickCloseModal}
            onClickCloseModalBackground={this.props.onClickCloseModalBackground}
            onClickSubmitData={this.props.onClickSubmitData} >

            <Input
              type="text"
              placeholder="Type product name"
              labelText="Name"
              nameInput="addModalInputName"
              inputOrSelectValue={this.props.addModalInputName}
              onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

            <Input
              type="text"
              placeholder="Type product manufacturer name"
              labelText="Manufacturer"
              nameInput="addModalInputManufacturer"
              inputOrSelectValue={this.props.addModalInputManufacturer}
              onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

            <Input
              type="text"
              placeholder="Type product price"
              labelText="Price"
              nameInput="addModalInputPrice"
              inputOrSelectValue={this.props.addModalInputPrice}
              onChangeInputOrSelect={this.props.onChangeInputOrSelect} />
               
            <Input
              type="number"
              placeholder="Type product quantity"
              labelText="Quantity"
              nameInput="addModalInputQuantity"
              inputOrSelectValue={this.props.addModalInputQuantity}
              onChangeInputOrSelect={this.props.onChangeInputOrSelect} />
          </ModalBody>
        </div>
      );

    } else if(modalCurrent === "deleteModal") {
        return (
          <div id="modals-group">
            <ModalBody
              title="Delete Product"
              btnSubmitIcon={<i className="fas fa-trash-alt"></i>}
              btnSubmitText="Delete"
              onClickCloseModal={this.props.onClickCloseModal}
              onClickCloseModalBackground={this.props.onClickCloseModalBackground}
              onClickSubmitData={this.props.onClickSubmitData} >

              <SelectForm
                id="selectId"
                listProduct={this.props.listProduct}
                nameInput="deleteModalSelect"
                inputOrSelectValue={this.props.deleteModalSelect}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />
            </ModalBody>
          </div>
        );

    } else if(modalCurrent === "updateModal") {
        return (
          <div id="modals-group">
            <ModalBody
              title="Update Product"
              btnSubmitIcon={<i className="fas fa-edit"></i>}
              btnSubmitText="Update"
              onClickCloseModal={this.props.onClickCloseModal}
              onClickCloseModalBackground={this.props.onClickCloseModalBackground}
              onClickSubmitData={this.props.onClickSubmitData} >

              <SelectForm
                id="selectId"
                listProduct={this.props.listProduct}
                nameInput="updateModalSelect"
                inputOrSelectValue={this.props.updateModalSelect}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

              <Input
                type="text"
                placeholder="Type product name"
                labelText="Name"
                id="update-product-name-product"
                nameInput="updateModalInputName"
                inputOrSelectValue={this.props.updateModalInputName}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

              <Input
                type="text"
                placeholder="Type product manufacturer name"
                labelText="Manufacturer"
                id="update-product-manufacturer-product"
                nameInput="updateModalInputManufacturer"
                inputOrSelectValue={this.props.updateModalInputManufacturer}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

              <Input
                type="text"
                placeholder="Type product price"
                labelText="Price"
                id="update-product-price-product"
                nameInput="updateModalInputPrice"
                inputOrSelectValue={this.props.updateModalInputPrice}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />

              <Input
                type="number"
                placeholder="Type product quantity"
                labelText="Quantity"
                id="update-product-quantity-product"
                nameInput="updateModalInputQuantity"
                inputOrSelectValue={this.props.updateModalInputQuantity}
                onChangeInputOrSelect={this.props.onChangeInputOrSelect} />
            </ModalBody>
          </div>
        );
    } else {
      return ( false );
    }
  }
}

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataInput = this.handleDataInput.bind(this);
    this.handleBtnPrev = this.handleBtnPrev.bind(this);
    this.handleBtnNext = this.handleBtnNext.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleOpenUpdateModal = this.handleOpenUpdateModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalClickBackground = this.handleCloseModalClickBackground.bind(this);
    this.handleSubmitData = this.handleSubmitData.bind(this);

    this.state = {
      modalCurrent: false,
      pageCurrent: 1,
      listProduct: [],
      addModalInputName: '',
      addModalInputManufacturer: '',
      addModalInputPrice: '',
      addModalInputQuantity: '',
      deleteModalSelect: '',
      updateModalSelect: '',
      updateModalInputName: '',
      updateModalInputManufacturer: '',
      updateModalInputPrice: '',
      updateModalInputQuantity: '',
      limitListDataCurrent: 6,
      listCurrentFirstData: 0
    };
  };

  showOneProductData() {
    const showOneProductData = new FormData();
    showOneProductData.append('updateModalSelect', this.state.updateModalSelect);

    axios.post('scripts_server/crudShowOneProductData.php', showOneProductData).then(response => {
      const data = response.data;
      this.setState({ 
        updateModalInputName: data.name,
        updateModalInputManufacturer: data.manufacturer,
        updateModalInputPrice: data.price,
        updateModalInputQuantity: data.quantity
      });
    }).catch(error => { console.log(error) });
  }

  showProducts() {
    const showProducts = new FormData();
    showProducts.append('limitListDataCurrent', this.state.limitListDataCurrent);
    showProducts.append('listCurrentFirstData', this.state.listCurrentFirstData);

    axios.post('scripts_server/crudShowProductsData.php', showProducts).then(response => {
      const data = response.data;
      this.setState({ listProduct: data });
    }).catch(error => { console.log(error) })
  }

  componentDidMount() {
    this.showProducts();
  }

  handleDataInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const modalCurrent = this.state.modalCurrent;

    this.setState({
      [name]: value
    }, () => {
      modalCurrent === "updateModal" && this.showOneProductData();
    });
  }

  handleBtnPrev() {
    if(this.state.listCurrentFirstData > 0) {
      this.setState(
        state => ({ listCurrentFirstData: state.listCurrentFirstData -= 6 }),
        () => {
          this.showProducts();
        });
      this.setState(state => ({ pageCurrent: state.pageCurrent -= 1 }));
    }
  }

  handleBtnNext() {
    if(this.state.listProduct.length === 6) {
      this.setState(
        state => ({ listCurrentFirstData: state.listCurrentFirstData += 6 }),
        () => {
          this.showProducts();
        });
      this.setState(state => ({ pageCurrent: state.pageCurrent += 1 }));
    }
  }

  handleOpenAddModal() {
    this.setState({
      modalCurrent: 'addModal'
    });
  };

  handleOpenDeleteModal() {
    this.setState({
      modalCurrent: 'deleteModal'
    });
  };

  handleOpenUpdateModal() {
    this.setState({
      modalCurrent: 'updateModal'
    });
  };

  handleCloseModal() {
    this.setState({
      modalCurrent: false
    });
  };

  handleCloseModalClickBackground(event) {
    event.target.id === "product-modal-background" && this.setState({ modalCurrent: false });
  };

  handleSubmitData(e) {
    e.preventDefault();
    const modalCurrent = this.state.modalCurrent;
    let formDataSubmit = {};

    if(modalCurrent === 'addModal') {
      let addModalInputName = this.state.addModalInputName;
      let addModalInputManufacturer = this.state.addModalInputManufacturer;
      let addModalInputPrice = this.state.addModalInputPrice;
      let addModalInputQuantity = this.state.addModalInputQuantity;

      formDataSubmit = {};
      formDataSubmit = new FormData();
      formDataSubmit.append('modalCurrent', modalCurrent);
      formDataSubmit.append('addModalInputName', addModalInputName);
      formDataSubmit.append('addModalInputManufacturer', addModalInputManufacturer);
      formDataSubmit.append('addModalInputPrice', addModalInputPrice);
      formDataSubmit.append('addModalInputQuantity', addModalInputQuantity);

    } else if (modalCurrent === 'deleteModal') {
      let deleteModalSelect = this.state.deleteModalSelect;

      formDataSubmit = {};
      formDataSubmit = new FormData();
      formDataSubmit.append('modalCurrent', modalCurrent);
      formDataSubmit.append('deleteModalSelect', deleteModalSelect);

    } else if (modalCurrent === 'updateModal') {
      let updateModalSelect = this.state.updateModalSelect;
      let updateModalInputName = this.state.updateModalInputName;
      let updateModalInputManufacturer = this.state.updateModalInputManufacturer;
      let updateModalInputPrice = this.state.updateModalInputPrice;
      let updateModalInputQuantity = this.state.updateModalInputQuantity;

      formDataSubmit = {};
      formDataSubmit = new FormData();
      formDataSubmit.append('modalCurrent', modalCurrent);
      formDataSubmit.append('updateModalSelect', updateModalSelect);
      formDataSubmit.append('updateModalInputName', updateModalInputName);
      formDataSubmit.append('updateModalInputManufacturer', updateModalInputManufacturer);
      formDataSubmit.append('updateModalInputPrice', updateModalInputPrice);
      formDataSubmit.append('updateModalInputQuantity', updateModalInputQuantity);
    }

    modalCurrent && axios.post('scripts_server/crudDataChanges.php', formDataSubmit)
      .then(response => { this.showProducts(); })
      .catch(error => { console.log(error) })
  }

  render() {
    return (
      <div id="main">
        <div id="registered-products-body">
          <h2>Registered Products</h2>
          <div id="registered-products-table">
            <Table listProduct={this.state.listProduct}/>
          </div>

          <div id="registered-products-btngroup-body">
            <MainLeftButtonsGroup
              onClickBtnPrev={this.handleBtnPrev}
              onClickBtnNext={this.handleBtnNext}
              pageCurrent={this.state.pageCurrent} />
            <MainRightButtonsGroup 
              onClickAddModal={this.handleOpenAddModal}
              onClickDeleteModal={this.handleOpenDeleteModal}
              onClickUpdateModal={this.handleOpenUpdateModal} />
          </div>
        </div>

        {<Modals /> && <Modals
                         modalCurrent={this.state.modalCurrent}
                         onClickCloseModal={this.handleCloseModal}
                         onClickCloseModalBackground={this.handleCloseModalClickBackground}
                         listProduct={this.state.listProduct}
                         onChangeInputOrSelect={this.handleDataInput}
                         addModalInputName={this.state.addModalInputName}
                         addModalInputManufacturer={this.state.addModalInputManufacturer}
                         addModalInputPrice={this.state.addModalInputPrice}
                         addModalInputQuantity={this.state.addModalInputQuantity}
                         deleteModalSelect={this.state.deleteModalSelect}
                         updateModalSelect={this.state.updateModalSelect}
                         updateModalInputName={this.state.updateModalInputName}
                         updateModalInputManufacturer={this.state.updateModalInputManufacturer}
                         updateModalInputPrice={this.state.updateModalInputPrice}
                         updateModalInputQuantity={this.state.updateModalInputQuantity}
                         onClickSubmitData={this.handleSubmitData} /> }
      </div>
    );
  };
};

ReactDOM.render(<MainView />, document.querySelector('#root'));