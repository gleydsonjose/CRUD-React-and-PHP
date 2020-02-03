const listProduct = [
  {
    id: 1,
    name: 'Keyboard CK104',
    manufacturer: 'Motospeed',
    price: 50,
    quantity: 7
  },
  {
    id: 2,
    name: 'Mouse DeathAdder 3.5G Blue',
    manufacturer: 'Razer',
    price: 40,
    quantity: 10
  },
  {
    id: 3,
    name: 'Monitor SyncMaster 732NW',
    manufacturer: 'Samsung',
    price: 150,
    quantity: 5
  },
];

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
    listProduct.map((product) =>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
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
        <TableData />
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
  const inputType = props.inputType;
  const labelText = props.labelText;

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input type={inputType} placeholder={inputPlaceholder}/>
    </div>
  );
}

function SelectForm(props) {
  const selectId = props.id;

  return (
    <div className="input-group">
      <label htmlFor={selectId}>Choose a product</label>
      <select id={selectId}>
        <option value="none">None</option>
        {listProduct.map((product) => 
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
            <Button type="submit" icon={btnSubmitIcon} text={btnSubmitText} />
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
            onClickCloseModalBackground={this.props.onClickCloseModalBackground}>
            <Input type="text" placeholder="Type product name" labelText="Name" />
            <Input type="text" placeholder="Type product manufacturer name" labelText="Manufacturer" />
            <Input type="text" placeholder="Type product price" labelText="Price" />
            <Input type="number" placeholder="Type product quantity" labelText="Quantity" />
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
              onClickCloseModalBackground={this.props.onClickCloseModalBackground}>
              <SelectForm id="selectId" />
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
              onClickCloseModalBackground={this.props.onClickCloseModalBackground}>
              <SelectForm id="selectId" />
              <Input type="text" placeholder="Type product name" labelText="Name" id="add-product-name-product" />
              <Input type="text" placeholder="Type product manufacturer name" labelText="Manufacturer" id="add-product-manufacturer-product" />
              <Input type="text" placeholder="Type product price" labelText="Price" id="add-product-price-product" />
              <Input type="number" placeholder="Type product quantity" labelText="Quantity" id="add-product-quantity-product" />
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
    this.handleBtnPrev = this.handleBtnPrev.bind(this);
    this.handleBtnNext = this.handleBtnNext.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleOpenUpdateModal = this.handleOpenUpdateModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalClickBackground = this.handleCloseModalClickBackground.bind(this);

    this.state = {
      modalCurrent: false,
      pageCurrent: 1
    };
  };

  handleBtnPrev() {
    this.state.pageCurrent > 1 &&  this.setState(state => ({ pageCurrent: state.pageCurrent -= 1 }))
  }

  handleBtnNext() {
    this.state.pageCurrent < 10 &&  this.setState(state => ({ pageCurrent: state.pageCurrent += 1 }))
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

  render() {
    return (
      <div id="main">
        <div id="registered-products-body">
          <h2>Registered Products</h2>
          <div id="registered-products-table">
            <Table />
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
                         onClickCloseModalBackground={this.handleCloseModalClickBackground} />}
      </div>
    );
  };
};

ReactDOM.render(<MainView />, document.querySelector('#root'));