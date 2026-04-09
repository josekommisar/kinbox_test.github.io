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
    console.log("on conversation1", data)

    getWorkspaceInfo()
})

Kinbox.getWorkspaceInfo(function (payload) {
    console.log("the payload1", payload)
})

/********************
 * Exemplos
 ********************/

function getWorkspaceInfo() {
    // Obter informações do workspace
    Kinbox.getWorkspaceInfo(async function (data) {
        console.log("on workspaceInfo1", data)
        workspaceInfo = data
    })
}

function getWorkspaceInfo() {
    // Obter informações do workspace
    Kinbox.getWorkspaceInfo(async function (payload) {
        console.log("the payload2", payload)
        workspaceInfo = payload
    })
}

