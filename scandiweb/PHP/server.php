<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    abstract class Product
    {

        abstract protected function getsku();
        abstract protected function getname();
        abstract protected function getprice();
        abstract protected function getvalue();
    
    }
    
    class Dvd extends Product
    {
        protected function getsku() {
            $user = $_POST['name'];
            echo ("Hello from server: $user");
        }
        protected function getname() {
            return "name";
        }
        protected function getprice() {
            return "price";
        }
        protected function getvalue($separator = "x") {
            return "H" + $separator + "W" + $separator + "L";
        }

    }
?>