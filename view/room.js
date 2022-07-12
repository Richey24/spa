// use template literal for html
const room = `
 <main class="main">
                    <aside class="sub-sidenav">
                        <div class="inputs-group">
                            <div>
                                <label for="name-input">Name</label>
                                <input type="text"
                                    id="name-input">
                            </div>

                            <div>
                                <label for="category">Category</label>

                                <select name="category"
                                    id="category">
                                    <option value="volvo">VIP</option>
                                    <option value="saab">FREE</option>
                                </select>
                            </div>

                            <div>
                                <label for="price-input">Price</label>
                                <input type="text"
                                    id="price-input">
                            </div>

                            <div style="margin: 0 0"
                                class="buttons-class">
                                <button class="button-37"
                                    style="margin-right: 10px"
                                    role="button">Add</button>
                                <button class="button-37"
                                    role="button">Edit</button>
                            </div>
                        </div>


                    </aside>
                    <div class="sub-main">
                        <div class="title-filter">

                            <div style="text-align: center; font-family: Verdana;">
                                <h1>Hotel Management System</h1>
                                <h3><I>Manage Rooms</I></h3>

                                <label for="cars">Refresh</label>

                                <select name="cars"
                                    id="cars"
                                    class="basic-select">
                                    <option value="volvo">VIP</option>
                                    <option value="saab">FREE</option>
                                </select>

                                <input style="width: 200px;"
                                    type="text"
                                    id="basic-input"
                                    class="basic-input">
                                <button style="width: 80px; padding: 0; height: 40px;"
                                    class="button-37">Refresh</button>
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

export default room;
