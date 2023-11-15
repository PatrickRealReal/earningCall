import {Col, Container, Form, Row} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ml_model from "../assets/img/performance_ml_model.png";
import {Box} from "@ant-design/charts";
import {useEffect, useState} from "react";


export const Projects = () => {
    const [renderData, setRenderData] = useState([
        {
            name: "Baseline",
            value: 0.661,
            'Mean + 1SD': 0.661 + 0.000,
            'Mean - 1SD': 0.661 - 0.000,
        },
        {
            name: "DT",
            value: 0.603,
            'Mean + 1SD': 0.603 + 0.110,
            'Mean - 1SD': 0.603 - 0.110,
        },
        {
            name: "RF",
            value: 0.742,
            'Mean + 1SD': 0.742 + 0.053,
            'Mean - 1SD': 0.742 - 0.053,
        },
        {
            name: "LR",
            value: 0.779,
            'Mean + 1SD': 0.779 + 0.004,
            'Mean - 1SD': 0.779 - 0.004,
        },
        {
            name: "SVM",
            value: 0.781,
            'Mean + 1SD': 0.781 + 0.007,
            'Mean - 1SD': 0.781 - 0.007,
        },
        {
            name: "NB",
            value: 0.706,
            'Mean + 1SD': 0.706 + 0.016,
            'Mean - 1SD': 0.706 - 0.016,
        },
        {
            name: "kNN",
            value: 0.751,
            'Mean + 1SD': 0.751 + 0.018,
            'Mean - 1SD': 0.751 - 0.018,
        }
])
    const [renderData2, setRenderData2] = useState([
        {
            name: "Baseline",
            value: 0.752,
            'Mean + 1SD': 0.752 + 0.000,
            'Mean - 1SD': 0.752 - 0.000,
        },
        {
            name: "DT",
            value: 0.646,
            'Mean + 1SD': 0.646 + 0.105,
            'Mean - 1SD': 0.646 - 0.105,
        },
        {
            name: "RF",
            value: 0.788,
            'Mean + 1SD': 0.788 + 0.090,
            'Mean - 1SD': 0.788 - 0.090,
        },
        {
            name: "LR",
            value: 0.852,
            'Mean + 1SD': 0.852 + 0.000,
            'Mean - 1SD': 0.852 - 0.000,
        },
        {
            name: "SVM",
            value: 0.849,
            'Mean + 1SD': 0.849 + 0.002,
            'Mean - 1SD': 0.849 - 0.002,
        },
        {
            name: "NB",
            value: 0.788,
            'Mean + 1SD': 0.788 + 0.029,
            'Mean - 1SD': 0.788 - 0.029,
        },
        {
            name: "kNN",
            value: 0.831,
            'Mean + 1SD': 0.831 + 0.012,
            'Mean - 1SD': 0.831 - 0.012,
        }
])
    const [renderData3, setRenderData3] = useState([
        {
            name: "Baseline",
            value: 0.592,
            'Mean + 1SD': 0.592 + 0.000,
            'Mean - 1SD': 0.592 - 0.000,
        },
        {
            name: "DT",
            value: 0.613,
            'Mean + 1SD': 0.613 + 0.040,
            'Mean - 1SD': 0.613 - 0.040,
        },
        {
            name: "RF",
            value: 0.734,
            'Mean + 1SD': 0.734 + 0.008,
            'Mean - 1SD': 0.734 - 0.008,
        },
        {
            name: "LR",
            value: 0.735,
            'Mean + 1SD': 0.735 + 0.000,
            'Mean - 1SD': 0.735 - 0.000,
        },
        {
            name: "SVM",
            value: 0.742,
            'Mean + 1SD': 0.742 + 0.006,
            'Mean - 1SD': 0.742 - 0.006,
        },
        {
            name: "NB",
            value: 0.703,
            'Mean + 1SD': 0.703 + 0.026,
            'Mean - 1SD': 0.703 - 0.026,
        },
        {
            name: "kNN",
            value: 0.697,
            'Mean + 1SD': 0.697 + 0.010,
            'Mean - 1SD': 0.697 - 0.010,
        }
])
    const [value, setValue] = useState(null)

    const DemoBox = (props) => {

        console.log(props.list)
        const config = {
            data: props.list,
            xField: 'name',
            yField: ['q1', 'Mean + 1SD', 'value', 'Mean - 1SD', 'q3'],
            boxStyle: {
                stroke: '#545454',
                fill: '#1890FF',
                fillOpacity: 0.6,
            },
            yAxis: {
                min: 0,
                max: 1,
            }
        };
        return <Box {...config} />;
    };

    useEffect(() => {
        // 监听 value 的变化动态 renderData
        const modelLabels = ["Baseline", "DT", "RF", "LR", "SVM", "NB", "kNN"];

        if (value === 'R'){
            setRenderData([
                {
                    name: "Baseline",
                    value: 0.661,
                    'Mean + 1SD': 0.661 + 0.000,
                    'Mean - 1SD': 0.661 - 0.000,
                },
                {
                    name: "DT",
                    value: 0.603,
                    'Mean + 1SD': 0.603 + 0.110,
                    'Mean - 1SD': 0.603 - 0.110,
                },
                {
                    name: "RF",
                    value: 0.742,
                    'Mean + 1SD': 0.742 + 0.053,
                    'Mean - 1SD': 0.742 - 0.053,
                },
                {
                    name: "LR",
                    value: 0.779,
                    'Mean + 1SD': 0.779 + 0.004,
                    'Mean - 1SD': 0.779 - 0.004,
                },
                {
                    name: "SVM",
                    value: 0.781,
                    'Mean + 1SD': 0.781 + 0.007,
                    'Mean - 1SD': 0.781 - 0.007,
                },
                {
                    name: "NB",
                    value: 0.706,
                    'Mean + 1SD': 0.706 + 0.016,
                    'Mean - 1SD': 0.706 - 0.016,
                },
                {
                    name: "kNN",
                    value: 0.751,
                    'Mean + 1SD': 0.751 + 0.018,
                    'Mean - 1SD': 0.751 - 0.018,
                }
            ]
            )
            setRenderData2([
                {
                    name: "Baseline",
                    value: 0.752,
                    'Mean + 1SD': 0.752 + 0.000,
                    'Mean - 1SD': 0.752 - 0.000,
                },
                {
                    name: "DT",
                    value: 0.646,
                    'Mean + 1SD': 0.646 + 0.105,
                    'Mean - 1SD': 0.646 - 0.105,
                },
                {
                    name: "RF",
                    value: 0.788,
                    'Mean + 1SD': 0.788 + 0.090,
                    'Mean - 1SD': 0.788 - 0.090,
                },
                {
                    name: "LR",
                    value: 0.852,
                    'Mean + 1SD': 0.852 + 0.000,
                    'Mean - 1SD': 0.852 - 0.000,
                },
                {
                    name: "SVM",
                    value: 0.849,
                    'Mean + 1SD': 0.849 + 0.002,
                    'Mean - 1SD': 0.849 - 0.002,
                },
                {
                    name: "NB",
                    value: 0.788,
                    'Mean + 1SD': 0.788 + 0.029,
                    'Mean - 1SD': 0.788 - 0.029,
                },
                {
                    name: "kNN",
                    value: 0.831,
                    'Mean + 1SD': 0.831 + 0.012,
                    'Mean - 1SD': 0.831 - 0.012,
                }
            ]
            )
            setRenderData3([
                {
                    name: "Baseline",
                    value: 0.592,
                    'Mean + 1SD': 0.592 + 0.000,
                    'Mean - 1SD': 0.592 - 0.000,
                },
                {
                    name: "DT",
                    value: 0.613,
                    'Mean + 1SD': 0.613 + 0.040,
                    'Mean - 1SD': 0.613 - 0.040,
                },
                {
                    name: "RF",
                    value: 0.734,
                    'Mean + 1SD': 0.734 + 0.008,
                    'Mean - 1SD': 0.734 - 0.008,
                },
                {
                    name: "LR",
                    value: 0.735,
                    'Mean + 1SD': 0.735 + 0.000,
                    'Mean - 1SD': 0.735 - 0.000,
                },
                {
                    name: "SVM",
                    value: 0.742,
                    'Mean + 1SD': 0.742 + 0.006,
                    'Mean - 1SD': 0.742 - 0.006,
                },
                {
                    name: "NB",
                    value: 0.703,
                    'Mean + 1SD': 0.703 + 0.026,
                    'Mean - 1SD': 0.703 - 0.026,
                },
                {
                    name: "kNN",
                    value: 0.697,
                    'Mean + 1SD': 0.697 + 0.010,
                    'Mean - 1SD': 0.697 - 0.010,
                }
            ]
            )

        }else if (value === 'F1'){
            setRenderData([{
                name: "Baseline",
                value: 0.661,
                'Mean + 1SD': 0.661 + 0.00,
                'Mean - 1SD': 0.661 - 0.00,
            }, {
                name: "DT",
                value: 0.614,
                'Mean + 1SD': 0.614 + 0.085,
                'Mean - 1SD': 0.614 - 0.085,
            }, {
                name: "RF",
                value: 0.679,
                'Mean + 1SD': 0.679 + 0.025,
                'Mean - 1SD': 0.679 - 0.025,
            }, {
                name: "LR",
                value: 0.689,
                'Mean + 1SD': 0.689 + 0.006,
                'Mean - 1SD': 0.689 - 0.006,
            }, {
                name: "SVM",
                value: 0.698,
                'Mean + 1SD': 0.698 + 0.008,
                'Mean - 1SD': 0.698 - 0.008,
            }, {
                name: "NB",
                value: 0.698,
                'Mean + 1SD': 0.698 + 0.020,
                'Mean - 1SD': 0.698 - 0.020,
            }, {
                name: "kNN",
                value: 0.718,
                'Mean + 1SD': 0.718 + 0.005,
                'Mean - 1SD': 0.718 - 0.005,
            }])
            setRenderData2([{
                name: "Baseline",
                value: 0.752,
                'Mean + 1SD': 0.752 + 0.00,
                'Mean - 1SD': 0.752 - 0.00,
            }, {
                name: "DT",
                value: 0.679,
                'Mean + 1SD': 0.679 + 0.073,
                'Mean - 1SD': 0.679 - 0.073,
            }, {
                name: "RF",
                value: 0.753,
                'Mean + 1SD': 0.753 + 0.05,
                'Mean - 1SD': 0.753 - 0.05,
            }, {
                name: "LR",
                value: 0.784,
                'Mean + 1SD': 0.784 + 0.001,
                'Mean - 1SD': 0.784 - 0.001,
            }, {
                name: "SVM",
                value: 0.784,
                'Mean + 1SD': 0.784 + 0.001,
                'Mean - 1SD': 0.784 - 0.001,
            }, {
                name: "NB",
                value: 0.766,
                'Mean + 1SD': 0.766 + 0.017,
                'Mean - 1SD': 0.766 - 0.017,
            }, {
                name: "kNN",
                value: 0.787,
                'Mean + 1SD': 0.787 + 0.005,
                'Mean - 1SD': 0.787 - 0.005,
            }])
            setRenderData3([{
                name: "Baseline",
                value: 0.592,
                'Mean + 1SD': 0.592 + 0.00,
                'Mean - 1SD': 0.592 - 0.00,
            }, {
                name: "DT",
                value: 0.617,
                'Mean + 1SD': 0.617 + 0.031,
                'Mean - 1SD': 0.617 - 0.031,
            }, {
                name: "RF",
                value: 0.666,
                'Mean + 1SD': 0.666 + 0.012,
                'Mean - 1SD': 0.666 - 0.012,
            }, {
                name: "LR",
                value: 0.664,
                'Mean + 1SD': 0.664 + 0.009,
                'Mean - 1SD': 0.664 - 0.009,
            }, {
                name: "SVM",
                value: 0.684,
                'Mean + 1SD': 0.684 + 0.011,
                'Mean - 1SD': 0.684 - 0.011,
            }, {
                name: "NB",
                value: 0.695,
                'Mean + 1SD': 0.695 + 0.02,
                'Mean - 1SD': 0.695 - 0.02,
            }, {
                name: "kNN",
                value: 0.681,
                'Mean + 1SD': 0.681 + 0.009,
                'Mean - 1SD': 0.681 - 0.009,
            }])
        }else if (value === 'P'){
            setRenderData([{
                name: "Baseline",
                value: 0.661,
                'Mean + 1SD': 0.661 + 0.00,
                'Mean - 1SD': 0.661 - 0.00,
            }, {
                name: "DT",
                value: 0.638,
                'Mean + 1SD': 0.638 + 0.047,
                'Mean - 1SD': 0.638 - 0.047,
            }, {
                name: "RF",
                value: 0.705,
                'Mean + 1SD': 0.705 + 0.065,
                'Mean - 1SD': 0.705 - 0.065,
            }, {
                name: "LR",
                value: 0.699,
                'Mean + 1SD': 0.699 + 0.068,
                'Mean - 1SD': 0.699 - 0.068,
            }, {
                name: "SVM",
                value: 0.762,
                'Mean + 1SD': 0.762 + 0.054,
                'Mean - 1SD': 0.762 - 0.054,
            }, {
                name: "NB",
                value: 0.693,
                'Mean + 1SD': 0.693 + 0.027,
                'Mean - 1SD': 0.693 - 0.027,
            }, {
                name: "kNN",
                value: 0.711,
                'Mean + 1SD': 0.711 + 0.015,
                'Mean - 1SD': 0.711 - 0.015,
            }])
            setRenderData2([{
                name: "Baseline",
                value: 0.752,
                'Mean + 1SD': 0.752 + 0.00,
                'Mean - 1SD': 0.752 - 0.00,
            }, {
                name: "DT",
                value: 0.73,
                'Mean + 1SD': 0.73 + 0.028,
                'Mean - 1SD': 0.73 - 0.028,
            }, {
                name: "RF",
                value: 0.735,
                'Mean + 1SD': 0.735 + 0.021,
                'Mean - 1SD': 0.735 - 0.021,
            }, {
                name: "LR",
                value: 0.741,
                'Mean + 1SD': 0.741 + 0.030,
                'Mean - 1SD': 0.741 - 0.030,
            }, {
                name: "SVM",
                value: 0.748,
                'Mean + 1SD': 0.748 + 0.014,
                'Mean - 1SD': 0.748 - 0.014,
            }, {
                name: "NB",
                value: 0.75,
                'Mean + 1SD': 0.75 + 0.016,
                'Mean - 1SD': 0.75 - 0.016,
            }, {
                name: "kNN",
                value: 0.768,
                'Mean + 1SD': 0.768 + 0.016,
                'Mean - 1SD': 0.768 - 0.016,
            }])
            setRenderData3([{
                name: "Baseline",
                value: 0.592,
                'Mean + 1SD': 0.592 + 0.00,
                'Mean - 1SD': 0.592 - 0.00,
            }, {
                name: "DT",
                value: 0.625,
                'Mean + 1SD': 0.625 + 0.016,
                'Mean - 1SD': 0.625 - 0.016,
            }, {
                name: "RF",
                value: 0.717,
                'Mean + 1SD': 0.717 + 0.02,
                'Mean - 1SD': 0.717 - 0.02,
            }, {
                name: "LR",
                value: 0.719,
                'Mean + 1SD': 0.719 + 0.014,
                'Mean - 1SD': 0.719 - 0.014,
            }, {
                name: "SVM",
                value: 0.726,
                'Mean + 1SD': 0.726 + 0.011,
                'Mean - 1SD': 0.726 - 0.011,
            }, {
                name: "NB",
                value: 0.693,
                'Mean + 1SD': 0.693 + 0.02,
                'Mean - 1SD': 0.693 - 0.02,
            }, {
                name: "kNN",
                value: 0.674,
                'Mean + 1SD': 0.674 + 0.01,
                'Mean - 1SD': 0.674 - 0.01,
            }])
        }
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
                                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Seasoned Equity Offering</h5>
                            </Col>
                            <Col Col span={8} className="project-image-col">
                                <DemoBox list={renderData3}/>
                                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Corporate Bond Issuance</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
