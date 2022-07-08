const customer = `
<main class="main">
                    <aside style="width: 350px;"
                        class="sub-sidenav">
                        <div class="inputs-group">
                            <div>
                                <label for="name-input">Name</label>
                                <input type="text"
                                    id="name-input">
                            </div>
                            <div>
                                <label for="phone-input">Phone</label>
                                <input type="text"
                                    id="phone-input">
                            </div>

                            <div>
                                <label for="gender">Gender</label>

                                <select name="gender"
                                    id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label for="address">Address</label>
                                <textarea id="address"
                                    name="address"
                                    rows="4"
                                    cols="25"></textarea>
                            </div>



                            <div>
                                <label for="birth-date">Date of Birth</label>
                                <input class=""
                                    type="date"
                                    id="birth-date"
                                    name="birthDate">
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
                                <h3><I>Manage Customers</I></h3>

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
                                    <th>Rnum</th>
                                    <th>Guest Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>price</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Marcus Anderson</td>
                                    <td>VIP</td>
                                    <td>Available</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>James Anderson</td>
                                    <td>Regular</td>
                                    <td>Booked</td>
                                    <td>250</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mathew Anderson</td>
                                    <td>VIP</td>
                                    <td>Booked</td>
                                    <td>50</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default customer;
