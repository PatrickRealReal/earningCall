import {Col, Container, Form, Row} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ml_model from "../assets/img/performance_ml_model.png";
import {Box} from "@ant-design/charts";
import {useEffect, useState} from "react";


export const Projects = () => {
    const [renderData, setRenderData] = useState([{
        name: "Baseline",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }, {
        name: "DT",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }])
    const [renderData2, setRenderData2] = useState([{
        name: "Baseline",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }, {
        name: "DT",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }])
    const [renderData3, setRenderData3] = useState([{
        name: "Baseline",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }, {
        name: "DT",
        value: 0.67,
        'Mean + 1SD': 0.67 + 0.2,
        'Mean - 1SD': 0.67 - 0.2,
        outliers: [0, 1],
    }])
    const [value, setValue] = useState(null)

    const DemoBox = (props) => {

        console.log(props.list)
        const config = {
            data: props.list,
            xField: 'name',
            yField: ['q1', 'Mean + 1SD', 'value', 'Mean - 1SD', 'q3'],
            outliersField: 'outliers',
            boxStyle: {
                stroke: '#545454',
                fill: '#1890FF',
                fillOpacity: 0.6,
            },
        };
        return <Box {...config} />;
    };

    useEffect(() => {
        // 监听 value 的变化动态设置 renderData
        const modelLabels = ["Baseline", "DT", "RF", "LR", "SVM", "NB", "kNN"];

        if (value === 'R'){
            setRenderData([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData2([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData3([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])

        }else if (value === 'F1'){
            setRenderData([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData2([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData3([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
        }else if (value === 'P'){
            setRenderData([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData2([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
            setRenderData3([{
                name: "Baseline",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }, {
                name: "DT",
                value: 0.67,
                'Mean + 1SD': 0.67 + 0.2,
                'Mean - 1SD': 0.67 - 0.2,
                outliers: [0, 1],
            }])
        }
        // const data = modelLabels.map((label) => {
        //     const value = Number((Math.random()).toFixed(2))
        //     const mean = 0.15
        //     return {
        //         name: label,
        //         'value': value,
        //         'Mean + 1SD': value + mean,
        //         'Mean - 1SD': value - mean,
        //         outliers: [0, 1],
        //     };
        // });
    }, [value]);

    const changeSelect = (e) => {
        setValue(e.target.value)
    }

    const projects = [
        {
            imgUrl: ml_model,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Experiment</h2>
                        <p>Performance of different machine learning models, where the results are av- eraged over
                            5-fold cross-validation.</p>
                        <Form.Select value={value} onChange={changeSelect}
                                     style={{width: '117px', margin: '0px 0 20px', background: '#000', color: '#fff'}}
                                     aria-label="Default select example">
                            <option value="R">Recall</option>
                            <option value="P">Precision</option>
                            <option value="F1">F1-score</option>
                        </Form.Select>
                        <Row>
                            <Col Col span={8} className="project-image-col">
                                <DemoBox list={renderData} />
                                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Acquisition</h5>
                            </Col>
                            <Col Col span={8} className="project-image-col">
                                <DemoBox list={renderData2}/>
                                <h5 style={{marginTop: '20px', textAlign: 'center'}}>SEO</h5>
                            </Col>
                            <Col Col span={8} className="project-image-col">
                                <DemoBox list={renderData3}/>
                                <h5 style={{marginTop: '20px', textAlign: 'center'}}>CBI</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
