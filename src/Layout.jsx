import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
    var [navbarChecked, setNavbarChecked] = useState(false);
    var [mobile, setMobile] = useState(false);

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".Navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          var $navPlaceholder = $(".Navbar-Placeholder");
          $navPlaceholder.toggleClass('scrolled', $(this).scrollTop() > $navPlaceholder.height());
        });
    });

    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if ((prevScrollpos > currentScrollPos || document.getElementsByTagName("html")[0].scrollTop < 200)) {
            document.getElementById("Navbar").style.top = "0";
        } else if (!navbarChecked) {
            document.getElementById("Navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    const mql = window.matchMedia("(max-width: 768px)");
    const checkMediaQuery = (e) => { if (e.matches) { setMobile(true); } else { setMobile(false); } };
    mql.onchange = checkMediaQuery;
    useEffect(() => {
        checkMediaQuery(mql);
    });

    return (
        <div id="Layout">
            <Navbar navbarChecked={navbarChecked} setNavbarChecked={setNavbarChecked} />
            <Outlet context={{mobile: mobile}}/>
            <Footer />
        </div>
    )
}