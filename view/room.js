// use template literal for html
const room = `
 <main class="main">
                    <aside class="sub-sidenav">
                        <div class="inputs-group">
                        <form id="roomForm">
                        <div>
                        <label for="name-input">Room Number</label>
                        <input name="roomNum" type="text"
                                    id="name-input">
                            </div>

                            <div>
                            <label for="category">Category</label>

                            <select name="category"
                                    id="category">
                                    <option value="ECONOMY">ECONOMY</option>
                                    <option value="VIP">VIP</option>
                                    <option value="EXECUTIVE">EXECUTIVE</option>
                                    <option value="PRESIDENTIAL">PRESIDENTIAL</option>
                                </select>
                            </div>

                            <div>
                                <label for="price-input">Price</label>
                                <input name="price" type="text"
                                    id="price-input">
                                    </div>
                                    
                                    <center>
                                <button type="submit" class="button-37"
                                role="button">Add</button>
                                </center>
                                </form>
                        </div>


                    </aside>
                    <div class="sub-main">
                        <div class="title-filter">

                            <div style="text-align: center; font-family: Verdana;">
                                <h1>Hotel Management System</h1>
                                <h3><I>Manage Rooms</I></h3>

                                <label for="cars">Refresh</label>

                                <select name="cars"
                                style="width: 150px"
                                    id="cars"
                                    class="basic-select">
                                    <option value="ECONOMY">ECONOMY</option>
                                    <option value="VIP">VIP</option>
                                    <option value="EXECUTIVE">EXECUTIVE</option>
                                    <option value="PRESIDENTIAL">PRESIDENTIAL</option>
                                </select>

                                <button style="width: 80px; padding: 0; height: 40px;"
                                    class="button-37">Refresh</button>
                            </div>

                        </div>
                        <div class="table table table-bordered table-striped table-responsive-stack"
                            id="tableOne">
                            <table>
                            <thead>
                            <tr>
                            <th>Rnum</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>price</th>
                            <th>Delete</th>
                            </tr>
                            </thead>

                            <tbody  id="cusTable">
                            
                            </tbody>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default room;
