import React from "react";

function ChapterA () {
    return(
        <>
            <h1>깃 허브란?</h1>

            <h4>1. 깃허브(GitHub)는 형상 관리(변경 사항을 추적, 제어하는 과정) 플랫폼 중 하나</h4>
            <h4>2. 깃(Git)이라는 시스템을 기반으로 하며, 소스코드와 관련 파일을 저장하고 관리할 수 있는 웹 기반 호스팅 서비스를 제공한다</h4>
            <h4>3. 깃허브의 주요 특징으로는 <strong>버전관리</strong>, <strong>협업</strong>, <strong>이슈 트래킹</strong>, <strong>웹 호스팅</strong>, <strong>오픈소스</strong> 등이 있다.</h4>
            
            <h1>Git으로 무엇을 할 수 있을까?</h1>     
            <h4>Git이 제공하는 핵심 기능은 크게 버전관리(Version Control), 백업(Backup), 협업(Collaboration)이 있다.</h4>

            <h2>깃에서 자주 쓰이는 용어 이해하기</h2>
            <h3>1. 스테이지(Stage)</h3>
            <h4>버전으로 만들 파일이 대기하는 곳입니다. 예를 들어 내가 깃이 관리하는 폴더 내에서 10개의 파일을 수정했는데 4개의 파일만 버전으로 만들려면 이들만 스테이지로 넘겨주면 됩니다. 보통 초보 프로그래머들은 변경사항을 모두 커밋하기 때문에 스테이지와 커밋을 한꺼번에 처리하는 경우가 많습니다.</h4>
               
            <h3>2. 저장소(Repository)</h3>
            <h4>스테이지에서 대기하고 있던 파일들을 버전으로 만들어 저장하는 곳입니다.</h4>
                
            <h3>3. 커밋(Commit)</h3>
            <h4>파일이 스테이지에 있다면 버전을 만들 수 있는데 깃에서는 버전을 만드는 것을 커밋(Commit)한다고 합니다. 커밋할 때는 그 버전에 어떤 변경 사항이 있었는지 알려주기 위해 메시지를 함께 기록해주는 것이 좋습니다.</h4>

            <h3>4. .gitignore</h3>
            <h4>버전 관리 중인 디렉터리 안에 관리하지 않을 특정 파일이나 디렉터리가 있다면 .gitignore 파일을 만들어 그 목록을 지정할 수 있습니다.</h4>
            <h3>5. 브랜치(Branch)</h3>
            <h4>변경 사항을 분리하여 관리할 수 있도록 합니다. 각각의 브랜치는 독립적인 작업 공간을 가지며, 변경 사항을 추적하고 병합할 수 있습니다.</h4>
            <h3>6. 푸시(Push)</h3>
            <h4>푸시는 로컬 저장소에서 변경된 코드를 원격 저장소로 업로드하는 작업입니다.</h4>
            <h3>7. 풀(Pull)</h3>
            <h4>풀은 원격 저장소에서 변경된 코드를 로컬 저장소로 가져오는 작업입니다. (실제 팀원들이 작업한 것이 내 로컬 프로젝트로 넘어옴)</h4>
            <h3>7. Fetch Origin</h3>
            <h4>원격 저장소로부터 변경사항을 가져오는 동작을 의미합니다. 위의 pull과 다른 점이 있다면 변경 사항을 로컬 저장소에 반영하지는 않고 단순히 업데이트된 커밋들을 가져옵니다.</h4>

                
                

                
                

                
                

                
                

                
                

        </>
    )
}
export default ChapterA