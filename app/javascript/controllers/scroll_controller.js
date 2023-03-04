import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        console.log("connected");
        const messages = document.getElementById("messages");
        messages.addEventListener("DOMNodeInserted", this.resetScroll.bind(this, messages));
        this.resetScroll(messages);
    }
    disconnect() {
        messages.removeEventListener("DOMNodeInserted", this.resetScroll);
    }
    resetScroll(messages) {
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
}