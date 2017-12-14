import React from 'react';
import Draggable from 'react-draggable';
import $ from "jquery";


export class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
       modalVisible: false,
    };
  }
  toggleModal() {
     this.setState({modalVisible: !this.state.modalVisible})
  }

  getInitialState() {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  }

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <div>
      <Draggable>
        <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}} {...dragHandlers}>
          <div className="toggleModal" style={{display: this.state.modalVisible ? 'block' : 'none' }}>
            <div className="toggleDiv" >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
                    <button onClick={this.toggleModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="form-group">
                      <label  class="col-sm-2 control-label"
                                for="inputDate">Date</label>
                      <div class="col-sm-10">
                          <input type="date" class="form-control"
                          id="inputDate" placeholder="Date"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label"
                            for="inputTask" >Task</label>
                      <div class="col-sm-10">
                          <input type="task" class="form-control"
                              id="inputTask" placeholder="Task"/>
                      </div>
                    </div>
                  <div className="modal-footer">
                    <button onClick={this.toggleModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Draggable>
          <button onClick={this.toggleModal}>
              Click Here
          </button>
        </div>

    )
  }
}
