// ==UserScript==
// @name         Relacibos Lichess userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  My custom lichess UX/UI enhancements
// @author       Relacibo
// @match        https://www.lichess.org/*
// @match        https://lichess.org/*
// @grant        none
// @inject-into content
// ==/UserScript==

(function () {
  "use strict";
  let style = `
.purple .is2d cg-board, 
#top div.color_demo.purple {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDggOCIKICAgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc5MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InVnbHkuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMiAoMGEwMGNmNTMzOSwgMjAyMi0wMi0wNCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM5MjkiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc5MjciCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNjQiCiAgICAgaW5rc2NhcGU6Y3g9IjMuNzY1NjI1IgogICAgIGlua3NjYXBlOmN5PSI0LjIwMzEyNSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE1NTUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTkxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjMiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJkIgogICAgIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgaWQ9ImdyaWQzMTcxNCIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8ZwogICAgIGlkPSJhIj4KICAgIDxnCiAgICAgICBpZD0iYiI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJjIj4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJkIj4KICAgICAgICAgIDxyZWN0CiAgICAgICAgICAgICB3aWR0aD0iMSIKICAgICAgICAgICAgIGhlaWdodD0iMSIKICAgICAgICAgICAgIGZpbGw9IiNmMGQ5YjUiCiAgICAgICAgICAgICBpZD0iZSIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM5Nzg5NzE7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgICAgICAgICA8dXNlCiAgICAgICAgICAgICB4PSIxIgogICAgICAgICAgICAgeT0iMSIKICAgICAgICAgICAgIGhyZWY9IiNlIgogICAgICAgICAgICAgeGxpbms6aHJlZj0iI2UiCiAgICAgICAgICAgICBpZD0idXNlOTA4IiAvPgogICAgICAgICAgPHJlY3QKICAgICAgICAgICAgIHk9IjEiCiAgICAgICAgICAgICBoZWlnaHQ9IjEiCiAgICAgICAgICAgICBmaWxsPSIjYjU4ODYzIgogICAgICAgICAgICAgaWQ9ImYiCiAgICAgICAgICAgICB3aWR0aD0iMSIKICAgICAgICAgICAgIHg9IjAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojNWY0YjNhO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgICAgICAgPHVzZQogICAgICAgICAgICAgeD0iMSIKICAgICAgICAgICAgIHk9Ii0xIgogICAgICAgICAgICAgaHJlZj0iI2YiCiAgICAgICAgICAgICB4bGluazpocmVmPSIjZiIKICAgICAgICAgICAgIGlkPSJ1c2U5MTEiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDx1c2UKICAgICAgICAgICB4PSIyIgogICAgICAgICAgIGhyZWY9IiNkIgogICAgICAgICAgIHhsaW5rOmhyZWY9IiNkIgogICAgICAgICAgIGlkPSJ1c2U5MTQiIC8+CiAgICAgIDwvZz4KICAgICAgPHVzZQogICAgICAgICB4PSI0IgogICAgICAgICBocmVmPSIjYyIKICAgICAgICAgeGxpbms6aHJlZj0iI2MiCiAgICAgICAgIGlkPSJ1c2U5MTciIC8+CiAgICA8L2c+CiAgICA8dXNlCiAgICAgICB5PSIyIgogICAgICAgaHJlZj0iI2IiCiAgICAgICB4bGluazpocmVmPSIjYiIKICAgICAgIGlkPSJ1c2U5MjAiIC8+CiAgPC9nPgogIDx1c2UKICAgICB5PSI0IgogICAgIGhyZWY9IiNhIgogICAgIHhsaW5rOmhyZWY9IiNhIgogICAgIGlkPSJ1c2U5MjMiIC8+Cjwvc3ZnPgo=')
}

#relacibo-custom-style-toggle-button {
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  opacity: 0.3;
}

#relacibo-custom-style-toggle-button:hover {
  opacity: 1;
}
`;
  let styleElement = document.createElement("style");
  document.body.appendChild(styleElement);
  styleElement.innerHTML = style;

  let toggleButton = document.createElement("div");
  toggleButton.setAttribute("id", "relacibo-custom-style-toggle-button");
  document.body.appendChild(toggleButton);

  let friendBox = document.getElementById("friend_box");

  function showTopBar(show) {
    let topBar = document.getElementById("top");
    if (show) {
      topBar.style.display = "none";
      toggleButton.setAttribute("data-icon", "♔");
      document.body.style.setProperty("--zoom", "115");
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      friendBox.style.display = "none";
    } else {
      topBar.style.display = "flex";
      toggleButton.setAttribute("data-icon", "♚");
      document.body.style.setProperty("--zoom", "100");
      document.body.style.overflow = "auto";
      friendBox.style.display = "block";
    }
  }
  let showStr = localStorage.getItem("relacibo.custom-style.show-top-bar");
  let show = !showStr || showStr === "true";
  showTopBar(show);
  toggleButton.addEventListener("click", function () {
    show = !show;
    showTopBar(show);
    localStorage.setItem("relacibo.custom-style.show-top-bar", show.toString());
  });

  window.addEventListener("load", function () {
    let resize = document.getElementsByTagName("cg-resize").item(0);
    if (resize) {
      resize.style.display = "none";
    }
  });
})();
