// use template literal for html
const service = `
 <main class="main">
                    <aside class="sub-sidenav"
                        style="width: 350px;">
                        <div class="inputs-group">
                            <div>
                                <label for="name-input">Room Number</label>
                               <select id="roomNum" name="roomNum">
                               </select>
                            </div>

                            <div>
                                <label for="service-list">Type</label>

                                <select name="service"
                                    id="service-list">
                                    <option value="towels">Extra Towels </option>
                                    <option value="wifi">Wifi Passcode </option>
                                    <option value="dinning">Dinning</option>
                                    <option value="cleaning">Room Cleaning</option>
                                </select>
                            </div>

                            <div>
                                <label for="status-list">Status</label>

                                <select name="status"
                                    id="status-list">
                                    <option value="pending">Pending </option>
                                    <option value="inProgress">In-Progress</option>
                                    <option value="complete">Complete</option>

                                </select>
                            </div>

                            <div>
                                <label for="assigned-date">Assigned</label>
                                <input class=""
                                    type="date"
                                    id="assigned-date"
                                    name="assigned-date">
                            </div>


                            <div style="margin: 0 0"
                                class="buttons-class">
                                <button class="button-37"
                                    style="margin-right: 10px"
                                    role="button">Add</button>
                                <button class="button-37"
                                    role="button">Edit</button>
                                <button class="button-37"
                                    role="button">Delete</button>
                            </div>


                        </div>


                    </aside>
                    <div class="sub-main">
                        <div class="title-filter">

                            <div style="text-align: center; font-family: Verdana;">
                                <h1>Hotel Management System</h1>
                                <h3><I>Manage Services</I></h3>

                                <label for="basic-input">Search</label>

                                <input type="text"
                                    id="basic-input"
                                    class="basic-input">
                                <button class="button-37">Refresh</button>
                            </div>

                        </div>
                        <div class="table table table-bordered table-striped table-responsive-stack"
                            id="tableOne">
                            <table>
                                <tr>
                                    <th>SN</th>
                                    <th>Room ID</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Date assigned</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>Extra Towels</td>
                                    <td>Pending</td>
                                    <td>24/11/2001</td>
                                </tr>
                                <td>2</td>
                                <td>8</td>
                                <td>Wifi Passcode</td>
                                <td>Complete</td>
                                <td>24/11/2001</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>Extra Towels</td>
                                    <td>Complete</td>
                                    <td>24/11/2001</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default service;
