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

Kinbox.getWorkspaceInfo(function (payload) {
    console.log("the payload", payload)
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

function getWorkspaceInfo() {
    // Obter informações do workspace
    Kinbox.getWorkspaceInfo(async function (payload) {
        console.log("the payload", payload)
        workspaceInfo = payload
    })
}

