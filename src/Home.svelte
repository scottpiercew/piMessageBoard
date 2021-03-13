<script>
    export let pages;
//     var usb = require('usb');
// usb.on('attach', function(device) {
//     console.log("usb attached" + device);
// });
// var devices = usb.getDeviceList();
// console.log(devices);
// var device = devices[0];
// device.open();

// device.interfaces[0].endpoints[0].transfer(64, function(error, data) {
//       console.log(error, data); // null, <Buffer 00, 00, 00, 00, 00, 00, 00, 00
// });

// var buf = new Buffer([0xFF, 0x12, 0x01]);

// device.interfaces[0].endpoints[1].transfer(buf, function(error) {
//   console.log(error); // null
// });
let viewPortHeight = window.innerHeight;

</script>
<div style="position:fixed; height: 100%; width: 100%;">
        <div class="flex flex-row">
        <img src={pages[0].url} alt={pages[0].label} class="w-2/4" style="height: {viewPortHeight}px" />
        <img src={pages[1].url} alt={pages[1].label} class="w-2/4" style="height: {viewPortHeight}px" />
    </div>
</div>
