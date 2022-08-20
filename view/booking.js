// use template literal for html
const booking = `
 <main class="main">
                    <aside class="sub-sidenav">
                        <div class="inputs-group">
                        <form id="bookForm">
                        <div>
                        <label for="name-input">Room Number</label>
                       <select id="roomNum" name="roomNum">
                       
                       </select>
                            </div>
                        <div>
                        <label for="name-input">Customer Name</label>
                        <input type="text"
                        id="name-input" name="cusName">
                            </div>

                            <div>
                                <label for=booking-date>Check In Date:</label>
                                <input type="date"
                                    id="booking-date"
                                    name="checkInDate">
                            </div>

                            <div>
                                <label for=booking-date>Check Out Date:</label>
                                <input type="date"
                                    id="booking-date"
                                    name="checkOutDate">
                            </div>

                            <div>
                                <label for="price-input">Cost</label>
                                <input type="text"
                                    id="price-input" name="cost">
                            </div>

                            <div style="margin: 0 0"
                                class="buttons-class">
                                <button type="submit" class="button-37"
                                    style="margin-right: 10px"
                                    role="button">Book</button>
                                    </form>
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
                            <thead>
                            <tr>
                            <th>Rnum</th>
                            <th>Customer Name</th>
                            <th>Check In Date</th>
                            <th>Check Out Date</th>
                            <th>Cost</th>
                            <th>Delete</th>
                            </tr>
                            </thead>
                       
                            <tbody id="cusTable">
                            
                            </tbody>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default booking;
