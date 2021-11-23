'use strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest Api Ku Berjalan", res)

};

//getALL
exports.tampilkanSemuaMahasiswa = function (req, res) {
    connection.query("SELECT * From mahasiswa",
        function (error, rows, fileds) {
            if (error) {
                console.log(error);
            }
            else {
                response.ok(rows, res)
            }
        });


};
//getALL
exports.tampilkanMahasiswaId = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * From mahasiswa where id_mahasiswa= ?",
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                response.ok(rows, res)
            }
        });


};

//Post
exports.tambahMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                response.ok("Berhasil Menambahkan Data", res)

            }
        });
    };


    exports.ubahMahasiswa = function (req, res) {
        var id = req.body.id_mahasiswa;
        var nim = req.body.nim;
        var nama = req.body.nama;
        var jurusan = req.body.jurusan;

        connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mahasiswa=?',
            [nim, nama, jurusan,id],
            function (error, rows, fields) {
                if (error) {
                    console.log(error);
                }
                else {
                    response.ok("Berhasil Mengubah Data", res)

                }
            });

    };
    //Delete
    exports.hapusMahasiswa = function (req, res) {
        var id = req.body.id_mahasiswa;
        connection.query("DELETE From mahasiswa where id_mahasiswa= ?",
            [id],
            function (error, rows, fields) {
                if (error) {
                    console.log(error);
                }
                else {
                    response.ok("Berhasil Menghapus Data", res)
                }
            });
    
    };
    