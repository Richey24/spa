// use template literal for html
const dashboard = `
            <main>
                    <div style="width: 100%; display: flex; justify-content: center;">

                        <div style="text-align: center; font-family: Verdana;">
                            <h1>Hotel Management System</h1>
                            <h3><I>Dashboard</I></h3>

                            <input type="text"
                                id="basic-input"
                                class="basic-input">
                            <button class="button-37">Refresh</button>
                        </div>

                    </div>
                    <div
                        style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; row-gap: 20px; padding-left: 20px; padding-right: 20px; margin-top: 2rem;">
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: cornflowerblue">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashCus">Total Customers</h1>
                            </div>
                        </div>
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: lawngreen">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashRoom">Total Rooms</h1>
                            </div>
                        </div>
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: slategrey">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashRoomA">Rooms Available</h1>
                            </div>
                        </div>
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: #3ca9e2">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashRoomB">Rooms Booked </h1>
                            </div>
                        </div>
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: #FFA500">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashPercent">Percent Occupancy </h1>
                            </div>
                        </div>
                        <div
                            style="width: 350px; height: 100px; display: flex; justify-content: center; align-items: center; background-color: tomato">
                            <div style="text-align: center; font-family: Verdana;">
                                <h1 id="dashRev">Today's Revenue</h1>
                            </div>
                        </div>

                    </div>

                </main>
`;

export default dashboard;
