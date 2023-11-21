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
                                <option>Department 4</option>
                                <option>Department 5</option>
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
                                <option>Name 4</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row col-sm-12">
                        <label for="exampleFormControlTextarea1" className='col-sm-2'>Example textarea</label>
                        <div className='col-sm-8'>
                            <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
                        </div>
                    </div>

                </form>

                <div className='leaveList'>

                </div>
            </div>
        </div>
    )
}

export default Leaveapplication