import $ from 'jquery';

const Leaveapplication = () => {

    // console.log($('#leavedatepicker'))

    // $('#leavedatepicker').datepicker({
    //     format: 'yyyy-mm-dd',
    //     autoclose: true,
    //     todayHighlight: true
    // });

    return (
        <div className='form-container'>
            <div className="container-fluid">

                <div className='page-heading col-sm-12'>
                    <h4>Leave Application</h4>
                </div>

                <form className='form'>
                    <div className="form-group row col-sm-12">
                        <div className="form-group row col-sm-6">
                            <label for="EntryNo" className="col-sm-2 col-form-label">Entry No</label>
                            <div class="col-sm-4 entryNo">
                                <input type="number" className="form-control" id="EntryNo" aria-describedby="EntryNo" placeholder="EntryNo" />
                            </div>
                        </div>

                        <div className="form-group row col-sm-6">
                            <label for="Date" className="col-sm-1 col-form-label">Date</label>
                            <div class="col-sm-4">
                                <select className="form-control" id="Date">
                                    <option>01-01-2023</option>
                                    <option>01-01-2023</option>
                                    <option>01-01-2023</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row col-sm-12">
                        <label for="Department" className='col-sm-2 col-form-label'>Department</label>
                        <div className='col-sm-8'>
                            <select className="form-control" id="Department">
                                <option>Department 1</option>
                                <option>Department 2</option>
                                <option>Department 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row col-sm-12">
                        <label for="Name" className='col-sm-2 col-form-label'>Employee Name</label>
                        <div className='col-sm-8'>
                            <select className="form-control" id="Name">
                                <option>Name 1</option>
                                <option>Name 2</option>
                                <option>Name 3</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row col-sm-12">
                        <label for="Reason" className='col-sm-2'>Reason</label>
                        <div className='col-sm-8'>
                            <textarea class="form-control" id="Reason" ></textarea>
                        </div>
                    </div>

                </form>

                <div className='leaveList'>
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th></th>
                                <th>Leave Date</th>
                                <th>Status</th>
                                <th>Approval Reason</th>
                                <th>Approval Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>2023-11-20</td>
                                <td>Approved</td>
                                <td>Family Emergency</td>
                                <td>Approved</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>2</td>
                                <td>2023-11-21</td>
                                <td>Approved</td>
                                <td>Family Emergency</td>
                                <td>Approved</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='approvalSection row col-md-12'>
                    <div className='row col-md-8'>
                        <label for="Approver" className="col-sm-2 col-form-label">Approved by</label>
                        <div class="col-sm-6">
                            <select className="form-control" id="Approver">
                                <option>Approver 1</option>
                                <option>Approver 2</option>
                                <option>Approver 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-2  buttons-div'>
                        <button type="button" class="btn btn-primary">Approve</button>
                        <button type="button" class="btn btn-danger close-btn">Close</button>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Leaveapplication