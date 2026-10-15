
h = 100; // larghezza spalla binario
s = 10; // spessore bordi binario
spess = 10; // spessore lastra plexiglass
height = 400; // altezza binario e plexiglass
length = 700; // lunghezza lastra plexiglass

linear_extrude(height = height){
polygon(points=[[0,0],[h,0],[h,s],[s+spess+s,s],[s+spess+s,s+spess],
[h,s+spess],[h,s+spess+s],[s+spess+s,s+spess+s]]);
mirror([1,0,0])
rotate([0,0,90])
polygon(points=[[0,0],[h,0],[h,s],[s+spess+s,s],[s+spess+s,s+spess],
[h,s+spess],[h,s+spess+s],[s+spess+s,s+spess+s]]);}


// lastra plexiglass

module lastra(colore="green", trasparenza=0.5) {
    color(colore, alpha=trasparenza)
        cube([length,  spess, height]);
}

translate([s+spess+s,s,0])
lastra();
translate([s+spess,s+s+spess,0])
rotate([0,0,90])
lastra();
