var a = function () {
    this.nama = 'dono';
  
        var x = function () {
            console.log(this.nama);
            // ini hasilnya dono kalo this ga di bind dono nya ga dapet
            }
  
    x();
  }