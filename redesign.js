function htmlspecialchars(str) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

function sizeformat(size) {
    if (size < 1000) {
        return size + ' B';
    } else if (size < 10240) {
        return (size / 1024).toFixed(2) + ' KB';
    } else if (size < 102400) {
        return (size / 1024).toFixed(1) + ' KB';
    } else if (size < 1024000) {
        return Math.floor(size / 1024) + ' KB';
    } else {
        return (size / (1024 * 1024)).toFixed(0) + ' MB';
    }
}
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-buton");
const customTxt = document.getElementById("custom-teks");
if (customBtn) {
    customBtn.addEventListener("click", function() {
        realFileBtn.click();
    });
}
if (realFileBtn) {
    realFileBtn.addEventListener("change", function() {
        const file = this.files[0];
        const fileName = htmlspecialchars(file.name);
        const fileSize = file.size;
        const fileExt = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
        const strext = fileExt.toUpperCase();
        const exthtml = '<div class="parentalert"><div class="alert-box" style="animation:alertprinsley 8s ease-out forwards"><a class="alert-close-button" href="">x</a><file>' + fileName + '</file><span class="alert-text"><er>Upload Error</er><br/><code nathan="code">.<b>' + strext + '</b></code> extensions are not allowed for upload.<br/><b>Tip: Change your files extension to .htm or .html</b></span></div></div>';
        const sizehtml = '<div class="parentalert"><div class="alert-box" style="animation:alertprinsley 8s ease-out forwards"><a class="alert-close-button" href="">x</a><file>' + fileName + '</file><span class="alert-text"><er>Upload Error</er><br/>Maximum allowed size is 50 KB, whereas your file size is ' + sizeformat(fileSize) + '.<br/><b>Tip: Compress your HTML file.</b></span></div></div>';
        const nullhtml = '<div class="parentalert"><div class="alert-box" style="animation:alertprinsley 8s ease-out forwards"><a class="alert-close-button" href="">x</a><file>' + fileName + '</file><span class="alert-text"><er>Upload Error</er><br/>Your file is empty 0 byte.<br/><b>Tip: Add HTML Code to your file.</b></span></div></div>';
        if (fileExt === 'html' || fileExt === 'htm') {
            if (fileSize < 53000) {
                if (fileSize > 0) {
                    if (realFileBtn.value) {
                        document.getElementById("lupload").checked = true;
                        customTxt.innerHTML = fileName;
                        document.querySelector('.inputan').focus();
                    } else {
                        customTxt.innerHTML = "No file chosen, yet.";
                    }
                } else {
                    document.body.appendChild(document.createElement("div")).innerHTML = nullhtml;
                    realFileBtn.value = '';
                    customTxt.innerHTML = "No file chosen, yet.";
                }
            } else {
                document.body.appendChild(document.createElement("div")).innerHTML = sizehtml;
                realFileBtn.value = '';
                customTxt.innerHTML = "No file chosen, yet.";
            }
        } else {
            document.body.appendChild(document.createElement("div")).innerHTML = exthtml;
            realFileBtn.value = '';
            customTxt.innerHTML = "No file chosen, yet.";
        }
    });
}
window.location.replace("#");
if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
}
const tombolList = document.querySelectorAll(".npm");
if (tombolList) {
    tombolList.forEach(function(tombol) {
        if (localStorage.getItem(tombol.dataset.id)) {
            tombol.style.backgroundColor = localStorage.getItem(tombol.dataset.id);
        }
        tombol.addEventListener("click", function() {
            if (tombol.style.backgroundColor !== "rgb(32, 113, 207)") {
                tombol.style.backgroundColor = "rgb(164, 34, 229)";
                localStorage.setItem(tombol.dataset.id, "#2071cf");
            } else {
                tombol.style.backgroundColor = "rgb(164, 34, 229)";
                localStorage.setItem(tombol.dataset.id, "#2071cf");
            }
        });
    });
}
const nameList = document.querySelectorAll(".change");
if (nameList) {
    nameList.forEach(function(namecl) {
        if (localStorage.getItem(namecl.dataset.id)) {
            namecl.style.color = localStorage.getItem(namecl.dataset.id);
        }
        namecl.addEventListener("click", function() {
            if (namecl.style.color !== "rgb(0, 255, 221)") {
                namecl.style.color = "rgb(111, 255, 236)";
                localStorage.setItem(namecl.dataset.id, "#00ffbf");
            } else {
                namecl.style.color = "rgb(111, 255, 236)";
                localStorage.setItem(namecl.dataset.id, "#00ffbf");
            }
        });
    });
}
const baseurl = `/search/`;
const form = document.querySelector('#idjs');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = document.querySelector('#inputanjs').value;
        window.location.href = baseurl + `${inputValue}`;
    });
}
const formx = document.querySelector('#idjsx');
if (formx) {
    formx.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValuex = document.querySelector('#inputanjsx').value;
        window.location.href = baseurl + `${inputValuex}`;
    });
}
const npsearch = document.querySelector('.fokusearch');
if (npsearch) {
    npsearch.onclick = function() {
        setTimeout(function() {
            document.querySelector('.inputsearch').focus();
        }, 50);
    };
}
const jumpage1 = document.getElementById("jumpage1");
const jumpage2 = document.getElementById("jumpage2");
const formjump = document.getElementById("formjump");
if (jumpage1 && jumpage2 && formjump) {
    jumpage1.addEventListener("change", function() {
        jumpage2.value = jumpage1.value;
    });
    jumpage2.addEventListener("change", function() {
        jumpage1.value = jumpage2.value;
    });
}
