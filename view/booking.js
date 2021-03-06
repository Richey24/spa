// use template literal for html
const booking = `
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
                                <label for=booking-date>Booking Date:</label>
                                <input type="date"
                                    id="booking-date"
                                    name="bookingDate">
                            </div>

                            <div>
                                <label for="days-input">Duration in Days</label>
                                <input type="text"
                                    id="days-input">
                            </div>

                            <div>
                                <label for="price-input">Cost</label>
                                <input type="text"
                                    id="price-input">
                            </div>

                            <div style="margin: 0 0"
                                class="buttons-class">
                                <button class="button-37"
                                    style="margin-right: 10px"
                                    role="button">Book</button>
                                <button class="button-37"
                                    role="button">Cancel</button>
                            </div>
                        </div>


                    </aside>
                    <div class="sub-main">
                        <div class="title-filter">

                            <div style="text-align: center; font-family: Verdana;">
                                <h1>Hotel Management System</h1>
                                <h3><I>Room's Booking</I></h3>

                            </div>

                        </div>
                        <div class="table table table-bordered table-striped table-responsive-stack"
                            id="tableOne">
                            <table>
                                <tr>
                                    <th>Rnum</th>
                                    <th>Room Id</th>
                                    <th>Customer Id</th>
                                    <th>Book Date</th>
                                    <th>Duration</th>
                                    <th>Cost</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>Thur March 10</td>
                                    <td>7</td>
                                    <td>900</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>8</td>
                                    <td>Tues March 8</td>
                                    <td>7</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>Thur March 10</td>
                                    <td>7</td>
                                    <td>750</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>Thur March 10</td>
                                    <td>7</td>
                                    <td>1100</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default booking;
