function _createModalWindow(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML("afterbegin",`
        <div class="vmodal">
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <div class="modal-title">Modal title</div>
                        <div class="modal-close">&times;</div>
                    </div>
        
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
        
                    <div class="modal-footer">
                        <button>Ok</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>`);
    document.body.appendChild(modal);
    return modal
}

$.modal = function (options) {
    const ANIMATION = 2000
    const $modal = _createModalWindow(options);
    let closing = false;

    return {
        open() {
            !closing && $modal.classList.add("open")
        },
        closed() {
            closing = true;
            $modal.classList.remove("open")
            $modal.classList.add("hide")
            setTimeout(() => {
                $modal.classList.remove("hide")
                closing = false
            }, ANIMATION)
        },
        destroy() {
        }
    }
}