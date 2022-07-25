// use template literal for html
const customer = `
<main class="main">
                    <aside style="width: 350px;"
                        class="sub-sidenav">
                        <form id="cusForm">
                        <div class="inputs-group">
                        <div>
                                <label for="name-input">Name</label>
                                <input type="text"
                                name="name"
                                id="name-input">
                                </div>
                                <div>
                                <label for="phone-input">Phone</label>
                                <input type="text"
                                name="phone"
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
                            
                            <div style="display: flex; justify-content: center"
                            class="buttons-class">
                            <button type="submit" class="button-37"
                            role="button">Add</button>
                            
                            </div>
                            </form>


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
                            <table id="cusTable">
                                <tr>
                                  <th>SN</th>
                                    <th>Customer Name</th>
                                    <th>Phone Nubmer</th>
                                    <th>Gender</th>
                                    <th>Date of birth</th>
                                    <th>Delete</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
`;

export default customer;
