// use template literal for html
const service = `
 <main class="main">
                    <aside class="sub-sidenav"
                        style="width: 350px;">
                        <div class="inputs-group">
                        <form id="serveForm">
                        <div>
                        <label for="name-input">Room Number</label>
                               <select id="bookNum" name="bookNum">
                               </select>
                            </div>

                            <div>
                                <label for="service-list">Type</label>

                                <select name="service"
                                    id="service-list">
                                    <option value="Extra Towels">Extra Towels </option>
                                    <option value="Wifi Passcode">Wifi Passcode </option>
                                    <option value="Dinning">Dinning</option>
                                    <option value="Room Cleaning">Room Cleaning</option>
                                </select>
                            </div>

                            <div>
                                <label for="assigned-date">Assigned</label>
                                <input class=""
                                    type="date"
                                    id="assigned-date"
                                    name="date">
                            </div>

                                <center>
                                <button type="submit" class="button-37"
                                style="margin-right: 10px"
                                role="button">Add</button>
                                </center>
                                </form>


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
                            <thead>
                            <tr>
                            <th>SN</th>
                            <th>Room ID</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Date assigned</th>
                            <th>Update</th>
                            </tr>
                            </thead>
                            <tbody id="cusTable">
                            </tbody> 
                            </table>
                        </div>
                    </div>
                </main>
`;

export default service;
