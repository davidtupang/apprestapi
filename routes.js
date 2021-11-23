'use strict';

module.exports = function(app){
    var jsonku =  require('./controller');
    app.route('/')
        .get(jsonku.index);

    app.route('/tampilkan')
        .get(jsonku.tampilkanSemuaMahasiswa);

    app.route('/tampilkan/:id')
        .get(jsonku.tampilkanMahasiswaId);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahMahasiswa);

    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);
    
};