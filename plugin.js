/********************
 * Variáveis globais
 ********************/
var conversation
var workspaceInfo

/********************
 * Eventos
 ********************/

Kinbox.on("conversation", function (data) {
    conversation = data
    console.log("on conversation", data)

    getWorkspaceInfo()
})

Kinbox.on("no_conversation", function (data) {
    conversation = null
    console.log("on no-conversation", data)
})

Kinbox.getWorkspaceInfo(function (payload) {
    console.log(payload)
})

/********************
 * Exemplos
 ********************/

function getWorkspaceInfo() {
    // Obter informações do workspace
    Kinbox.getWorkspaceInfo(async function (data) {
        console.log("on workspaceInfo", data)
        workspaceInfo = data
    })
}

